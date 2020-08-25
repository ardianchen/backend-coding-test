# Before run this api

### Copy-paste the .env file

```bash
$ cp .env.example .env
```

Edit the with your config 

### Install packages

```bash
$ yarn
```
### migration and config db

``` bash
$ yarn sequelize db:migrate
```

### Run

```bash
$ yarn dev
```

Server run on port 3000

### Build and run production

```bash
$ yarn build && yarn start
```

### Run test

```bash
$ yarn test
```

