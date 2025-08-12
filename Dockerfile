FROM openjdk:21-jdk-slim

LABEL maintainer="itsbonfiretime@gmail.com"
LABEL description="Minecraft Server Container mit Create-Live-6 Modpack (Java 21)"

ENV MINECRAFT_HOME=/server
ENV EULA=true
ENV PORT=25565

# Systemabhängigkeiten installieren
RUN apt-get update && \
    apt-get install -y --no-install-recommends git unzip && \
    rm -rf /var/lib/apt/lists/*

# Serverdateien aus GitHub klonen
RUN git clone https://github.com/ItsBonfireTime/Create-Live-6.git ${MINECRAFT_HOME}

WORKDIR ${MINECRAFT_HOME}

# EULA akzeptieren
RUN echo "eula=${EULA}" > eula.txt

# Port freigeben
EXPOSE ${PORT}

# Startbefehl: automatisch passende unix_args.txt finden
CMD sh -c 'java @user_jvm_args.txt @$(find libraries/net/neoforged/neoforge -name unix_args.txt) "$@"'
