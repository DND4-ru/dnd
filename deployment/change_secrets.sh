#!/bin/bash

set -e

function change_mongo_secrets {
  echo "Setup mongodb secrets"
  read -p "* User name: " -r user_name
  read -sp "* Password: " -r password
  echo ""

  sed -i "s/^\( *mongo-root-username:\).*$/\1 $(echo -n ${user_name} | base64)/" mongo-secret.yaml
  sed -i "s/^\( *mongo-root-password:\).*$/\1 $(echo -n ${password} | base64)/" mongo-secret.yaml
}

function change_mongo_express_secrets {
  echo "Setup mongodb-express secrets"
  read -p "* User name: " -r user_name
  read -sp "* Password: " -r password
  echo ""

  sed -i "s/^\( *mongo-express-username:\).*$/\1 $(echo -n ${user_name} | base64)/" mongo-express-secret.yaml
  sed -i "s/^\( *mongo-express-password:\).*$/\1 $(echo -n ${password} | base64)/" mongo-express-secret.yaml
}

change_mongo_secrets
change_mongo_express_secrets
