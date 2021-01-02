#!/bin/bash

set -e

function change_mongodb_secrets {
  echo "Setup mongodb secrets"
  read -p "* User name: " -r user_name
  read -sp "* Password: " -r password

  sed -i "s/^\( *mongo-root-username:\).*$/\1 $(echo -n ${user_name} | base64)/" mongodb-secret.yaml
  sed -i "s/^\( *mongo-root-password:\).*$/\1 $(echo -n ${password} | base64)/" mongodb-secret.yaml
}

change_mongodb_secrets
