FROM openjdk:18-jdk-slim

WORKDIR /server

# Git installieren
RUN apt-get update && apt-get install -y git unzip && rm -rf /var/lib/apt/lists/*

# Serverdaten von GitHub holen
RUN git clone https://github.com/ItsBonfireTime/Create-Live-6.git /server

# EULA akzeptieren
RUN echo "eula=true" > eula.txt

# Port freigeben
EXPOSE 25565

# Server starten
CMD ["java", "@user_jvm_args.txt", "@libraries/net/neoforged/neoforge/21.1.180/unix_args.txt", "$@"]
