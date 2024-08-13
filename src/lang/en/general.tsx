import Link from 'next/link'

export const general = {
  workTitle: 'Full Stack Developer',
  references: {
    title: 'References',
    description: (
      <>
        See my recommendations on my{' '}
        <Link
          href="https://www.linkedin.com/in/oscar-trollhag/"
          target="_blank"
          className="underline">
          LinkedIn
        </Link>
        . Contact information can be given upon request.
      </>
    ),
  },
  location: 'Gothenburg, Sweden',
}
