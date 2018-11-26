# shintech/koa-next

## Table of Contents
1. [ Synopsis. ](#synopsis)
2. [ Usage. ](#usage)
	a. [.env](#env)
	b. [Development](#development)
	c. [Production](#production)
3. [ TODO. ](#todo)

<a name="synopsis"></a>
### Synopsis

  The next.js frontend and koa.js backend are both running on seperate servers. Any request to /api will be proxied to the backend which would presumably be running on a different machine.
  
### Installation

    ./install.sh

<a name="usage"></a>
### Usage
<a name="env"></a>
#### config/env/.env
    
    PORT=8000
    NODE_ENV=development
    BASE_URL=https://domain
    EMAIL=example@example.org

<a name="development"></a>
#### Development

    npm run dev
    
    # or
    
    yarn dev

<a name="production"></a>
#### Production
    docker-compose build && docker-compose up -d

<a name="todo"></a>
### TODO
- [ ] more descriptive names for redux actions
