#!/bin/bash

set -e

function escape {
  read -r data
  printf '%s\n' ${data} | sed -e 's/[]\/$*.^[]/\\&/g'
}

function extract_cert {
  sed '1,1d;$ d' "${1}" | awk '{print}' ORS=''
}

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

function change_tls_secrets {
  echo "TLS secrets"
  read -p "Path to '*.crt' file: " -r crt_file
  read -p "Path to '*.key' file: " -r key_file
  echo ""

  sed -i "s/^\( *tls\.crt:\).*$/\1 $(extract_cert ${crt_file} | escape)/" tls-secret.yaml
  sed -i "s/^\( *tls\.key:\).*$/\1 $(extract_cert ${key_file} | escape)/" tls-secret.yaml
}

change_mongo_secrets
change_mongo_express_secrets
change_tls_secrets
echo "DONE"
