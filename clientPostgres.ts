import pg from 'pg'

const { Client } = pg

class ClientePG {
  public client: any

  constructor() {
    this.client = new Client({
      user: 'root',
      password: 'root',
      host: '192.168.128.3',
      port: 5432,
      database: 'lavajato',
    })
  }

  async connect() {
    await this.client.connect()
  }

}

export default ClientePG;
