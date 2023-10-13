import { Client, Account, ID } from "appwrite";
import confi from "../confi/Confi";


export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client 
         .setEndpoint(confi.appwriteurl) 
         .setProject(confi.projectid);   
        this.account = new Account(this.client)    
    }

   async createAccount({email,password,name}){
    try {
        const userAccount = await this.account.create(ID.unique(),email,password,name)
        if(userAccount) {
            return userAccount
        } else {
            return userAccount
        }
    } catch (error) {
        throw error
    }
  }

  async login({email,password}){
    try {
        const userlogin = await this.account.createEmailSession(email,password)
        if(userlogin) {
            return userlogin
        } else {
            return userlogin
        }
    } catch (error) {
        throw error
    }
  }

  async logout(){
    try {
        const userlogout = await this.account.deleteSessions()
        if(userlogout) {
            return userlogout
        } else {
            return null
        }
    } catch (error) {
        throw error
    }
  }

  async getUser(){
    try {
        const getuser = await this.account.get()
        if(getuser) {
            return getuser
        } else {
            return null
        }
    } catch (error) {
        throw error
    }
  }

}


const authService = new AuthService();




export default authService
