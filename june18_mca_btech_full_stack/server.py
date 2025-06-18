from flask import Flask, render_template, request, redirect, abort
from nanoid import generate
from pickledb import PickleDB

app = Flask(__name__)

db = PickleDB('shorten.db') # database for shortened links

@app.route("/")
def hello_world():
    return render_template("index.html");

@app.route("/shorten", methods=["POST"])
def shorten():
    if request.method == 'POST':
        id = generate(size=5)
        url = request.form["url"]
        db.set(id, url)
        db.save()
        return id
    
@app.get("/<id>")
def visit(id):
    url = db.get(id)
    if url == None: 
        abort(404)
    return redirect(url)

        