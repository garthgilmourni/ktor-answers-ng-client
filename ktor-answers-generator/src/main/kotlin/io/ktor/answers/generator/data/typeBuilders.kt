package io.ktor.answers.generator.data

import com.github.javafaker.Faker
import io.ktor.answers.generator.db.*

fun buildUser(id: Int, faker: Faker) = UserDAO.new(id.toLong()) {
    name = userName(faker)
    displayName = displayName(faker)
    active = userActive(faker)
    passwordHash = characters(faker, 10)
    email = userEmail(faker)
    location = location(faker)
    aboutMe = characters(faker,100)
    link = userLink(faker)
}

fun buildQuestion(
    faker: Faker,
    questionAuthor: UserDAO
) = QuestionDAO.new {
    title = questionTitle(faker)
    data = Content.new {
        author = questionAuthor
        text = questionBody(faker)
    }
}

fun addVotes(
    faker: Faker,
    newQuestion: QuestionDAO,
    potentialVoters: List<UserDAO>
) = Vote.new {
    value = 5
    content = newQuestion.data
    this.voter = faker.options().nextElement(potentialVoters)
}

fun buildComment(
    faker: Faker,
    newQuestion: QuestionDAO,
    potentialAuthors: List<UserDAO>
) {
    CommentDAO.new {
        parent = newQuestion.data
        data = Content.new {
            author = faker.options().nextElement(potentialAuthors)
            text = commentBody(faker)
        }
    }
}

fun buildAnswer(
    faker: Faker,
    newQuestion: QuestionDAO,
    potentialAuthors: List<UserDAO>
) {
    AnswerDAO.new {
        accepted = true
        question = newQuestion
        data = Content.new {
            author = faker.options().nextElement(potentialAuthors)
            text = answerBody(faker)
        }
    }
}