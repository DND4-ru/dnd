#!/bin/bash

set -e

echo "Prepare minikube"
minikube start
minikube addons enable ingress

echo "Prepare mongodb storage"
kubectl apply -f mongo-pv.yaml
kubectl apply -f mongo-pvc.yaml

echo "Load mongodb"
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo-configmap.yaml
kubectl apply -f mongo.yaml
kubectl apply -f mongo-express-secret.yaml
kubectl apply -f mongo-express.yaml

echo "Load WebUI"
kubectl apply -f webui.yaml

echo "Load ingress"
kubectl apply -f tls-secret.yaml
kubectl apply -f ingress.yaml

echo "DONE"
