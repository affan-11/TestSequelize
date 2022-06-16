const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/functions");
const { addTV, listTv, updateTv, deleteTv, addTv } = require("./tv/functions");

const app = async (yargsObj) => {
    try {
        await sequelize.sync();

        if (yargsObj.movie) {
        if (yargsObj.add) {
            //take movie key value pairs from yargsObj, send them to an add function and return movie
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
        } else if (yargsObj.list) {
            //list all movies from database
            await listMovies();
        } else if (yargsObj.update) {
            //take filter and update key value pairs form yargsObj, send them to update function and return success/failure message
            await updateMovie({ actor: yargsObj.actor }, { title: yargsObj.title });
        } else if (yargsObj.delete) {
            //take filter k/v pair from yargsObj and sennd them to delete fucntion, return success/failure message
            await deleteMovie({ title: yargsObj.title });
        } else {
            console.log("incorrect command")
        }
    } else if (yargsObj.Tv) {
        if (yargsObj.add) {
            await addTv({title:yargsObj.title, actor: yargsObj.actor});
        } else if (yargsObj.list) {
            await listTv();
        } else if (yargsObj.update) {
            await updateTv({ actor: yargsObj.actor}, { title: yargsObj.title});
        } else if (yargsObj.delete) {
            await deleteTv({ title: yargsObj.title});
        } else {
            console.log("incorrect command");
        }
    }
    } catch (error) {
        console.log(error);
    }
}


app(yargs.argv);