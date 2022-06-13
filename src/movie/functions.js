const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(`Successfully added ${newMovie.dataValues.title} to the database`);
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
      //find all movies
      const movies = await Movie.findAll();
      for (let i = 0; i < movies.length; i++) {
        console.log(movies[i].dataValues.title, movies[i].dataValues.actor);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
exports.updateMovie = async (updateObj, filterObj) => {
    try {
      //find a movie and update a column
      const response = await Movie.update(updateObj, { where: filterObj });
      if (response[0] > 0) {
        console.log("Successfully updated");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
exports.deleteMovie = async (filterObj) => {
    try {
      //find a movie and delete it
      const response = await Movie.destroy({ where: filterObj });
      if (response > 0) {
        console.log("Successfully deleted");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };