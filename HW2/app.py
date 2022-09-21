from flask import Flask, render_template, request, url_for, redirect
import joblib
import pandas as pd

app = Flask(__name__)


@app.route('/', methods = ['GET', 'POST'])
def raw():
    if(request.method == 'POST'):
        age = request.form['age']
        weight = request.form['weight']
        clf = joblib.load("regr.pkl")
        x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
        predict = clf.predict(x)[0]
        return render_template('website.html', res=predict)
    else: 
        return render_template('website.html')

if __name__ == "__main__" :
    app.run()

     