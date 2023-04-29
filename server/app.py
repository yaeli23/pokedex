from flask_cors import CORS
from flask import Flask, jsonify, request
import db

DEFAULT_PAGE_SIZE = 5


class Pokedex(object):

    def __init__(self):
        self.data = []
        self.sort = ""
        self.filter = ""
        self.page_size = DEFAULT_PAGE_SIZE

    def start(self):
        self.data = db.get()
        app = Flask(__name__)
        CORS(app, resources={r"/api/*": {"origins": "*"}})
        app.route('/api/', methods=['GET'])(self.get_data)
        app.route('/api/icon/<name>', methods=['GET'])(self.get_icon_url)
        app.run(port=8080)

    def handle_filter(self, filter_val):
        if filter_val != self.filter:
            self.filter = filter_val
            self.sort = ""

            self.data = db.get()
            if filter_val:
                self.data = list(filter(lambda pokemon: pokemon["type_one"] and pokemon["type_one"].startswith(filter_val), self.data))

    def handle_sort(self, sort_val):
        if sort_val != self.sort:
            self.sort = sort_val
            if sort_val in ["ascending", "descending"]:
                self.data = sorted(self.data, key=lambda json: json["number"], reverse=sort_val == "descending")

    def handle_page_size(self, page_size):
        if page_size != self.page_size:
            self.page_size = page_size

    def get_data(self):
        page_arg = request.args.get("page", 1, type=int)
        page_size_arg = request.args.get("pageSize", 100, type=int)
        sort_arg = request.args.get("sort", "", type=str)
        filter_arg = request.args.get("filter", "", type=str)

        self.handle_filter(filter_arg)
        self.handle_sort(sort_arg)
        self.handle_page_size(page_arg)

        data = self.data[page_size_arg * (page_arg - 1):page_size_arg * (page_arg - 1) + page_size_arg]
        return jsonify({"pokemons": data, "total_size": len(self.data)})

    @staticmethod
    def get_icon_url(name: str):
        return f"https://img.pokemondb.net/sprites/silver/normal/{name}.png"


if __name__ == '__main__':
    Pokedex().start()
