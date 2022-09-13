FROM node:14
COPY . .
RUN yarn install
RUN yarn run build
RUN rm -R .next/cache/
CMD ["yarn", "start"]
