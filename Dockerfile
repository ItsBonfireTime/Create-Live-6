FROM openjdk:18-jdk-slim

# --- Metadaten ---
LABEL maintainer="itsbonfiretime@gmail.com"
LABEL description="Minecraft Server Container mit OpenJDK 18 slim und Create-Live-6 Modpack"

# --- Umgebungsvariablen ---
ENV MINECRAFT_HOME=/server
ENV EULA=true
ENV PORT=25565

# --- Systemabhängigkeiten installieren ---
# git und unzip werden benötigt, danach Caches löschen um Image klein zu halten
RUN apt-get update && \
    apt-get install -y --no-install-recommends git unzip && \
    rm -rf /var/lib/apt/lists/*

# --- Serverdateien klonen ---
RUN git clone https://github.com/ItsBonfireTime/Create-Live-6.git ${MINECRAFT_HOME}

WORKDIR ${MINECRAFT_HOME}

# --- EULA akzeptieren ---
RUN echo "eula=${EULA}" > eula.txt

# --- Ports freigeben ---
EXPOSE ${PORT}

# --- Startbefehl ---
# JVM-Parameter werden aus user_jvm_args.txt geladen
# Zusätzlich werden unix_args.txt für Neoforged Mod hinzugefügt
# "$@" erlaubt Flexibilität beim Überschreiben von Startparametern
CMD ["sh", "-c", "java @user_jvm_args.txt @libraries/net/neoforged/neoforge/21.1.180/unix_args.txt \"$@\""]