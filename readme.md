## shintech/koa-next

### Installation

    ./install.sh
    
### Usage

#### .env
    
    PORT=8000
    NODE_ENV=development
    BASE_URL=https://domain
    EMAIL=example@example.org

#### Development

    npm run dev
    
    # or
    
    yarn dev
    
#### Production
    # ./config/env/production.env

    PORT=8000
    HOST=0.0.0.0
    NODE_ENV=production
    BASE_URL=https://shintech.ninja

    docker-compose build && docker-compose up -d

### TODO
- [ ] more descriptive names for redux actions