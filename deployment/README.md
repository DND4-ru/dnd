### Change default secrets

### Customization

Default SSL certificates are there. Default login & password is "root".

Use `change_secrets.sh` to change secrets in interactive way.

### SSL certificates

If you do not have certificates, you can generate them in a separate folder:

```shell script
mkdir certs && cd certs
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout apache-selfsigned.key -out apache-selfsigned.crt
openssl dhparam -out dhparam.pem 2048
```

### Running

Right now it's based on `minikube` and local persistent storage.

Script `deploy.sh` will:
 * start minikube
 * install ingress
 * apply configurations
