module.exports = {
  async afterCreate({ result }) {
    try {
      await strapi.plugins["email"].services.email.send({
        to: "jacco.taal@gmail.com",
        from: "jacco.taal@pascarella-development.com",
        subject: "New contact request",
        text: `You recived a form submission from: ${result.name}, (${result.email}). With the following message: ${result.description}}`,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
