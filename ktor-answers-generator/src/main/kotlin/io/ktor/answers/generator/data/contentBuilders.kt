package io.ktor.answers.generator.data

import com.github.javafaker.Faker

fun questionTitle(faker: Faker): String {
    val firstWord = faker.options().nextElement(QuestionStart.values())
    val remainder = loremText(faker, 8)
    return "$firstWord $remainder?"
}

fun questionBody(faker: Faker) = loremText(faker, 100)

fun commentBody(faker: Faker) = loremText(faker, 20)

fun answerBody(faker: Faker) = loremText(faker, 20)

fun location(faker: Faker) = faker.address().fullAddress() ?: "No address"

fun userLink(faker: Faker) = "https://${characters(faker, 10)}.com"

fun userEmail(faker: Faker) = "${characters(faker, 8)}@foo.com"

fun characters(faker: Faker, num: Int) = faker.lorem().characters(num) ?: ""

fun userActive(faker: Faker) = faker.bool().bool()

fun userName(faker: Faker) = faker.name().name() ?: "None"

fun displayName(faker: Faker) = faker.name().username() ?: "None"

fun pickRange(faker: Faker, range: IntRange): IntRange {
    return 0 .. faker.number().numberBetween(range.first, range.last)
}

fun loremText(faker: Faker, numWords: Int): String {
    return faker.lorem().words(numWords).joinToString(" ")
}