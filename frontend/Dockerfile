FROM node:14-alpine

WORKDIR /frontend

COPY . .
RUN npm install
RUN npm run build
# RUN npm prune --production # Remove dev dependencies

EXPOSE 5000
ENV HOST=0.0.0.0

CMD [ "npm", "start" ]