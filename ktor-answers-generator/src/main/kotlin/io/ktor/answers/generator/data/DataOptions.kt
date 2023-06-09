package io.ktor.answers.generator.data

data class DataOptions(
    val userIds: IntRange,
    val numQuestions: IntRange,
    val numCommentsPerQuestion: IntRange,
    val numAnswersPerQuestion: IntRange
)