FROM node
WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . .


RUN npm i

## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000

ENTRYPOINT [ "/entrypoint.sh" ]

CMD npm run dev