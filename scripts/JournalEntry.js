/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <section id="entry--${entry.date}" class=".journalDate">
            Display the entry's full text, and the date
            it was entered here.
        </section>
    `
}
