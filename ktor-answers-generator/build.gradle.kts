plugins {
    kotlin("jvm") version "1.8.21"
}

group = "answers.generator"
version = "1.0-SNAPSHOT"

val exposedVersion: String by project
val javaFakeVersion: String by project
val postgresVersion: String by project
val kotlinxDatetimeVersion: String by project

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.github.javafaker:javafaker:$javaFakeVersion")
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:$kotlinxDatetimeVersion")
    implementation("org.jetbrains.exposed:exposed-core:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-dao:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-jdbc:$exposedVersion")
    implementation("org.jetbrains.exposed:exposed-kotlin-datetime:$exposedVersion")
    implementation("org.postgresql:postgresql:$postgresVersion")
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

kotlin {
    jvmToolchain(11)
}