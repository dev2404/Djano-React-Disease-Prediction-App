from django.shortcuts import render
from django.http import JsonResponse
import json
import pandas as pd
import numpy as np
import csv
import pickle

model = pickle.load(open("model_pickle","rb"))
import joblib
    
# Create your views here.

def scoreJson(request):
    X = []

    data = pd.read_csv("Testing.csv")
    X = data.iloc[:,:-1]
    
 
    symptoms_dict = {}
    for index, symptom in enumerate(X):
        symptoms_dict[symptom] = index  
    print(request.body, "bye")
    input_vector = np.zeros(132)
    
    data = json.loads(request.body)
    print(data)
    dataF=[]
    for i in data:
        dataF.append(i["Symptom"])

    # dataF = list(data.values())
    print(dataF)
    # dataF = pd.DataFrame({'x':data}).transpose()

    for i in dataF:
        if i in symptoms_dict:
            input_vector[symptoms_dict[i]] = 1
    prediction = model.predict([input_vector])
    prediction = str(prediction[0])
    print(prediction)

    return JsonResponse({'prediction':prediction})