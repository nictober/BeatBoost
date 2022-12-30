FROM nginx:alpine

COPY . /usr/share/nginx/dev.beatboost.ru
RUN rm -rf /usr/share/nginx/dev.beatboost.ru/nginx.dockerfile \
    /etc/nginx/conf.d
RUN mv /usr/share/nginx/dev.beatboost.ru/.nginx /etc/nginx/conf.d
RUN chown -R nginx:1002 /usr/share/nginx/dev.beatboost.ru