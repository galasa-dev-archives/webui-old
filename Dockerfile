ARG dockerRepository

FROM ${dockerRepository}/library/httpd:2.4

RUN rm -v /usr/local/apache2/htdocs/*

COPY httpd.conf /usr/local/apache2/conf/httpd.conf

COPY dist/ /usr/local/apache2/htdocs/

