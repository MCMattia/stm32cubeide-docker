ARG IMAGE=ubuntu:22.04

FROM ${IMAGE} AS base

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/London

RUN apt-get -y update
RUN apt-get -y install zip

COPY en.st-stm32cubeide_1.17.0_23558_20241125_2245_amd64.deb_bundle.sh.zip /tmp/stm32cubeide-installer.sh.zip

RUN unzip -p /tmp/stm32cubeide-installer.sh.zip > /tmp/stm32cubeide-installer.sh && rm /tmp/stm32cubeide-installer.sh.zip

FROM ${IMAGE}
ENV STM32CUBEIDE_VERSION=1.16.1
ENV DEBIAN_FRONTEND=noninteractive
ENV LICENSE_ALREADY_ACCEPTED=1
ENV TZ=Etc/London
ENV PATH="${PATH}:/opt/st/stm32cubeide_${STM32CUBEIDE_VERSION}"

LABEL org.opencontainers.image.authors="MCMattia"
LABEL org.opencontainers.image.source=https://github.com/MCMattia/stm32cubeide-docker

RUN apt-get -y update && apt-get -y install

COPY --from=base /tmp/stm32cubeide-installer.sh /tmp

RUN chmod +x /tmp/stm32cubeide-installer.sh && /tmp/stm32cubeide-installer.sh && rm /tmp/stm32cubeide-installer.sh

