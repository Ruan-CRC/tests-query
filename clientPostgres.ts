import pg from 'pg'

const { Client } = pg

class ClientePG {
  public client: any

  constructor() {
    this.client = new Client({
      user: process.env.USER_DB,
      password: process.env.PASS_DB,
      host: process.env.HOST_DB,
      port: Number(process.env.PORT_DB),
      database: process.env.DATABASE_DB,
    })

    this.connect()
  }

  async connect() {
    try {
      console.log('Connecting to database...')
      await this.client.connect()
      console.clear()
    } catch (error) {
      console.error('Error connecting to database: ', error)
    }
  }

}

export default ClientePG;
