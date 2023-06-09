package io.ktor.answers.generator

import com.github.javafaker.Faker
import io.ktor.answers.generator.data.*
import io.ktor.answers.generator.db.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SqlExpressionBuilder.greaterEq
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.transactions.transaction
import java.util.*

fun main() {
    connectToDB()
    deleteExistingData()
    addSampleData(
        Faker(Locale("en-GB")),
        DataOptions(
            userIds = 1000 until 1020,
            numQuestions = 1..10,
            numAnswersPerQuestion = 1..5,
            numCommentsPerQuestion = 1..5
        )
    )
}

private fun connectToDB() {
    Database.connect("jdbc:postgresql://localhost:5432/postgres", user = "postgres", password = "password")
}

private fun addSampleData(faker: Faker, options: DataOptions) {
    transaction {
        addLogger(StdOutSqlLogger)

        val users = options.userIds.map { id -> buildUser(id, faker) }

        for (user in users) {
            val numQuestions = pickRange(faker, options.numQuestions)
            val numComments = pickRange(faker, options.numCommentsPerQuestion)
            val numAnswers = pickRange(faker, options.numAnswersPerQuestion)

            for (num in numQuestions) {
                val newQuestion = buildQuestion(faker, user)
                addVotes(faker, newQuestion, users)

                for (numComment in numComments) {
                    buildComment(faker, newQuestion, users)
                }

                for (numAnswer in numAnswers) {
                    buildAnswer(faker, newQuestion, users)
                }
            }
        }
    }
}


private fun deleteExistingData() {
    val tables = listOf(
        UserTable, VoteTable, CommentTable, QuestionTable, AnswerTable
    )

    transaction {
        addLogger(StdOutSqlLogger)

        tables.forEach {
            it.deleteWhere {
                id.greaterEq(0)
            }
        }
    }
}