const Tv = require("./table");

exports.addTv = async (TvObj) => {
    try {
        const newTv = await Tv.create(TvObj);
        console.log(`Successfully added ${newTv.dataValues.title} to the database`);
    } catch (error) {
        console.log(error)
    }
}

exports.listTv = async () => {
    try {
      //find all shows
      const Tv = await Tv.findAll();
      for (let i = 0; i < Tv.length; i++) {
        console.log(Tv[i].dataValues.title, Tv[i].dataValues.actor);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
exports.updateTv = async (updateObj, filterObj) => {
    try {
      //find a show and update a column
      const response = await Tv.update(updateObj, { where: filterObj });
      if (response[0] > 0) {
        console.log("Successfully updated");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
exports.deleteTv = async (filterObj) => {
    try {
      //find a show and delete it
      const response = await Tv.destroy({ where: filterObj });
      if (response > 0) {
        console.log("Successfully deleted");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };