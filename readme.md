# Verifiable STM32CubeIde docker image

STM32CubeIde docker image built by github actions with verifiable steps.

The [build-image](https://github.com/MCMattia/stm32cubeide-docker/actions/workflows/build-image.yml) github action downloads the STM32CubeIde installer from the official website and creates the [mcmattia/stm32cubeide-docker](https://hub.docker.com/r/mcmattia/stm32cubeide-docker) docker image.

This project was created to ensure secure and verifiable file copying into the Docker container, addressing concerns about unverified file copying by independent developers.

The resulting Docker image can be utilized to build STM32CubeIde projects in CI/CD environments.

The STM32CubeIde software available in the docker container is licensed under the [ST software license agreement](https://st.com/resource/en/license/SLA0047_TrueSTUDIO.pdf).

## Image versions

| Image version | STM32CubeIde version |
| ------------- | -------------------- |
| 1.0           | 1.16.0               |

## Usage

### Verify the image with github cli (optional)

```
gh attestation verify oci://docker.io/mcmattia/stm32cubeide-docker:1.0 -R mcmattia/stm32cubeide-docker
```

### Pull the image from [docker hub](https://hub.docker.com/r/mcmattia/stm32cubeide-docker)

```
docker pull mcmattia/stm32cubeide-docker:1.0
```

### Run the image

```
docker run -i -t -v .:/workspace mcmattia/stm32cubeide:1.0
```

where:

- `-i` keeps stdin open
- `-t` allocates pseudo TTY
- `-v .:worskpace` binds your current folder to a folder in the docker container

### Execute the STM32CubeIde build command

```
stm32cubeide --launcher.suppressErrors -nosplash -application org.eclipse.cdt.managedbuilder.core.headlessbuild -data tmp/ide-workspace -import workspace -build ProjectName/BuildConfiguration
```

where:

- `-data tmp/ide-workspace` use specified directory as STM32CubeIde workspace
- `-import workspace` import directory previously bound to docker container
- `-build ProjectName/Debug` build project with specified build configuration

## Example

### Clone the repo [STM32-VSCode-CMake-streamlined](https://github.com/MCMattia/STM32-VSCode-CMake-streamlined)

```
git clone https://github.com/MCMattia/STM32-VSCode-CMake-streamlined.git
cd STM32-VSCode-CMake-streamlined
```

### Pull the image from [docker hub](https://hub.docker.com/r/mcmattia/stm32cubeide-docker)

```
docker pull mcmattia/stm32cubeide-docker:1.0
```

### Run the image

```
docker run -i -t -v .:/workspace mcmattia/stm32cubeide:1.0
```

### Execute the STM32CubeIde build command

```
stm32cubeide --launcher.suppressErrors -nosplash -application org.eclipse.cdt.managedbuilder.core.headlessbuild -data tmp/ide-workspace -import workspace -build STM32-VSCode-CMake-streamlined/Debug
```
