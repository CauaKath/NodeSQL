# NodeSQL

### Manual para uso de rotas

  ## Users 
  ### Um usuário deve ser cadastrado com nome e email!
  * Cadastrar usuário  
  ###### POST: localhost:3333/users
  ###### Body: JSON
  ```json
    {
      "name": "Cauã",
      "email": "caua@gmail.com"
    }
  ```
  ###### Return:
  ```json
    {
      "id": 1,
      "name": "Cauã",
      "email": "caua@gmail.com",
      "updatedAt": "2022-02-10T11:17:01.463Z",
      "createdAt": "2022-02-10T11:17:01.463Z"
    }
  ```
  * Listar usuários
  ###### GET: localhost:3333/users
  ###### Return:
  ```json
    [
      {
        "name": "Cauã",
        "email": "caua@gmail.com"
      },
      {
        "name": "Danieli",
        "email": "danieli@gmail.com"
      }
    ]
  ```
  * Buscar usuário
  ###### GET: localhost:3333/users/{user_id}
  ###### Params: ID do usuário
  ###### Return:
  ```json
    {
      "name": "Cauã",
      "email": "caua@gmail.com"
    }
  ```
  * Editar usuário
  ###### PUT: localhost:3333/users/{user_id}
  ###### Params: ID do usuário
  ###### Body: JSON
  ```json
    {
      "name": "Cauã",
      "email": "caua13@gmail.com"
    }
  ```
  ###### Return:
  ```json
    {
      "id": 1,
      "name": "Cauã",
      "email": "caua13@gmail.com",
      "createdAt": "2022-02-10T11:17:01.000Z",
      "updatedAt": "2022-02-10T11:43:41.000Z"
    }
  ```
  * Remover usuário
  ###### DELETE: localhost:3333/users/{user_id}
  ###### Params: user_id
  
  ## Addresses
  ### Um usuário deve ser cadastrado para poder cadastrar um endereço
  * Cadastrar endereço  
  ###### POST: localhost:3333/users/{user_id}/addresses
  ###### Params: ID do usuário
  ###### Body: JSON
  ```json
    {
      "zipcode": "89257-407",
      "street": "Rua Amanda Olavo",
      "number": 6765
    }
  ```
  ###### Return:
  ```json
    {
      "id": 1,
      "zipcode": "89257-407",
      "street": "Rua Amanda Olavo",
      "number": 6765,
      "user_id": "1",
      "updatedAt": "2022-02-10T11:17:11.312Z",
      "createdAt": "2022-02-10T11:17:11.312Z"
    }
  ```
  * Listar endereços do usuário
  ###### GET: localhost:3333/users/{user_id}/addresses
  ###### Params: ID do usuário
  ###### Return:
  ```json
    [
      {
        "zipcode": "89257-407",
        "street": "Rua Amanda Olavo",
        "number": 6765
      },
      {
        "zipcode": "89234-408",
        "street": "Rua Guilherme Veguer",
        "number": 6352
      }
    ]
  ```
  * Atualizar endereço
  ###### PUT: localhost:3333/users/{user_id}/addresses
  ###### Params: ID do usuário
  ###### Body:
  ```json
    {
      "zipcode": "89257-407",
      "street": "Rua Amanda Carvalho",
      "number": 6868
    }
  ```
  ###### Return:
   ```json
    {
      "id": 1,
      "zipcode": "89257-407",
      "street": "Rua Amanda Carvalho",
      "number": 6868,
      "createdAt": "2022-02-10T11:17:11.312Z",
      "updatedAt": "2022-02-10T11:58:35.000Z",
      "user_id": 1
    }
  ```
  * Remover endereço
  ###### DELETE: localhost:3333/users/{user_id}/addresses
  ###### Params: ID do usuário
  ###### Body:
  ```json
    {
      "zipcode": "89257-407"
    }
  ```
  
  ## Techs
  ### Um usuário deve ser cadastrado para poder cadastrar uma tecnologia
  * Cadastrar tecnologia  
  ###### POST: localhost:3333/users/{user_id}/techs
  ###### Params: ID do usuário
  ###### Body: JSON
  ```json
    {
      "name": "Node"
    }
  ```
  ###### Return:
  ```json
    {
      "id": 1,
      "name": "Node",
      "updatedAt": "2022-02-10T11:26:28.628Z",
      "createdAt": "2022-02-10T11:26:28.628Z"
    }
  ```
  * Listar tecnologias do usuário
  ###### GET: localhost:3333/users/{user_id}/techs
  ###### Params: ID do usuário
  ###### Return:
  ```json
    [
      {
        "name": "Node"
      },
      {
        "name": "Java"
      },
      {
        "name": "Javascript"
      }
    ]
  ```
  * Remover tecnologia
  ###### DELETE: localhost:3333/users/{user_id}/techs
  ###### Params: ID do usuário
  ###### Body:
  ```json
    {
      "name": "Java"
    }
  ```
  
  ## Report
  ### Rota para filtrar usuários por:
  * Email que termina em '@gmail'
  * Moradores da Rua Amanda Olavo
  * E se possuem alguma tecnologia cujo nome inicia com 'Java'
  ###### GET: localhost:3333/report
  ###### Return:
  ```json
    [
      {
        "name": "Cauã",
        "email": "caua@gmail.com",
        "addresses": [
          {
            "zipcode": "89257-407",
            "street": "Rua Amanda Olavo",
            "number": 6765
          }
        ],
        "techs": [
          {
            "name": "Java"
          },
          {
            "name": "Javascript"
          }
        ]
      }
    ]
  ```
