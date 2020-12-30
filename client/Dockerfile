# build environment
FROM node:15.5.0-stretch as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
RUN npm ci
RUN npm run build


# production environment
FROM httpd:2.4-alpine

COPY deploy/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY deploy/sites-enabled/ /usr/local/apache2/sites-enabled/

COPY --from=build /app/build /usr/local/apache2/htdocs

ENTRYPOINT ["apachectl", "-DFOREGROUND"]
