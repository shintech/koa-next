## shintech/koa-next

### Installation

    ./install.sh
    
### Usage

#### config/env/.env
    
    PORT=8000
    NODE_ENV=development
    BASE_URL=https://domain
    EMAIL=example@example.org

#### Development

    npm run dev
    
    # or
    
    yarn dev
    
#### Production
    docker-compose build && docker-compose up -d

### TODO
- [ ] more descriptive names for redux actions
