FROM node

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prebuild
RUN npm run build

# WORKDIR ./dist 
EXPOSE 8000

CMD ["npm", "run", "dev"]