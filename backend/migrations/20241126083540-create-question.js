'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quiz_id: {
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.TEXT
      },
      question_type: {
        type: Sequelize.ENUM('multiple_choice','essay')
      },
      choice_id: {
        type: Sequelize.INTEGER
      },
      essay_answer: {
        type: Sequelize.STRING
      },
      correct_answer: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('questions');
  }
};