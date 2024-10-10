FROM ubuntu:latest

LABEL org.opencontainers.image.authors="MCMattia"
LABEL org.opencontainers.image.source=https://github.com/MCMattia/stm32cubeide-docker

ENV DEBIAN_FRONTEND=noninteractive
ENV LICENSE_ALREADY_ACCEPTED=1
ENV TZ=Europe/London
ENV PATH="$PATH:/opt/st/stm32cubeide_1.16.0"

RUN apt-get -y update
RUN apt-get -y install
RUN apt-get -y install zip

COPY en.st-stm32cubeide_1.16.1_22882_20240916_0822_amd64.deb_bundle.sh.zip /tmp/stm32cubeide-installer.sh.zip
RUN unzip -p /tmp/stm32cubeide-installer.sh.zip > /tmp/stm32cubeide-installer.sh
RUN rm /tmp/stm32cubeide-installer.sh.zip

RUN chmod +x /tmp/stm32cubeide-installer.sh
RUN /tmp/stm32cubeide-installer.sh
RUN rm /tmp/stm32cubeide-installer.sh

