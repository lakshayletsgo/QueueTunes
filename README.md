## NOTE
Before running the app you first need to have docker desktop in your system and running in the background
Also install packages like prisma then only run the prisma command

## How to run this app locally
1. To run this app locally first start the docker database
2. To run docker database I have used run this command
    docker run -p 5432:5432 -e POSTGRES_PASSWORD=randompassword postgres

        In this the 5432 is the port where the docker database will run. They are set as environment variables
        postgres is the name of the database
        randompassword is the password to the database

3. After we run the database we first migrate the prisma schema we have created by running the command
    npx prisma migrate dev

        This will remigrate the database 

4. We then just run the 
    npm run dev

5. To check the entries we can run the commnad 
    npx prisma studio

        This will run the structure of the database in user readable format so that we can edit and remove data from there only
    
6. In this app i will fix in the future but if you are reading this then it is not fixed i.e.
   You need to enter the creator id manually in the code by first logout from the browser and then login again 
   When you get the entry in the table opened in the step 5 take the id from the user table and replace the creatorId mentioned in the app/dashboard/page.tsx 

7. Then refresh it and it will run 

