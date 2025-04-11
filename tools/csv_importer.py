import os
import sys
import glob
import json
import requests

import pandas as pd

with open(os.path.join(sys.path[0], "classify.json")) as f:
    lookup = json.load(f)

def read_data():
    """
    Function that reads data from csv file
    """
    data = None
    data_path = os.path.join(sys.path[0], "..", "..")
    files = glob.glob(r"*.CSV", root_dir=data_path)
    if len(files) > 0:
        data = pd.read_csv(os.path.join(data_path, files[0]), sep=";")
    return data

def categorize(data):
    """
    Function that 
    """

    desc = f"{data["Beguenstigter/Zahlungspflichtiger"]} {data["Verwendungszweck"]}"

    res = {
        "category" : "Sonstiges",
        "amount" : float(data["Betrag"].replace(",", "."))*-1,
        "description" : desc,
        "date" : data["Buchungstag"]
    }

    for cat in lookup.keys():
        for ele in lookup[cat]:
            if pd.notna(data["Beguenstigter/Zahlungspflichtiger"]) is False:
                continue
            if ele in data["Beguenstigter/Zahlungspflichtiger"].lower() or ele in data["Verwendungszweck"].lower():
                res["category"] = cat
                res["amount"] = float(data["Betrag"].replace(",", "."))*-1
                res["description"] = ele
                res["date"] = data["Buchungstag"]
                return res

    return res

def parse_data(data):
    """
    Function that parses data
    """
    data.dropna(how="any", axis=0)
    for idx, row in data.iterrows():
        if "vorgemerkt" in row.Info or float(row["Betrag"].replace(",", "."))*-1 <= 0.0:
            continue
        row_dat = categorize(row)
        send_data(row_dat)

def send_data(data):
    r = requests.post(url="http://localhost:3123/api/categories", json={"category" : data["category"]})
    dat_spl = data["date"].split(".")
    new_date = f'20{dat_spl[-1]}-{dat_spl[1]}-{dat_spl[0]}'
    data["date"] = new_date
    r = requests.post(url="http://localhost:3123/api/expenses", json=data)
    print(r.text)

if __name__ == "__main__":
    data = read_data()
    new_data = parse_data(data)