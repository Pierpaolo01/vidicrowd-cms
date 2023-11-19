"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // async bootstrap({ strapi }) {
  //   const triggerGithubWorkflow = async (event) => {
  //     try {
  //       const response = await fetch(
  //         "https://api.github.com/repos/Pierpaolo01/vidicrowd-website/dispatches",
  //         {
  //           method: "POST",
  //           headers: {
  //             Accept: "application/vnd.github.everest-preview+json",
  //             Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             event_type: "strapi",
  //           }),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`GitHub dispatch failed: ${response.status}`);
  //       }

  //       console.log(
  //         `GitHub Actions workflow for ${event.action} dispatch triggered successfully.`
  //       );
  //     } catch (error) {
  //       console.error("Error triggering GitHub Actions workflow:", error);
  //     }
  //   };

  //   strapi.db.lifecycles.subscribe({
  //     afterCreate(event) {
  //       triggerGithubWorkflow(event);
  //     },
  //     afterUpdate(event) {
  //       triggerGithubWorkflow(event);
  //     },
  //     afterDelete(event) {
  //       triggerGithubWorkflow(event);
  //     },
  //   });
  // },
};
