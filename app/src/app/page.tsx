import { LibraryClientComponent } from '@/app/LibraryClientComponent'
import { LocalClientComponent } from './LocalClientComponent'

export default function Home() {
  return (
    <main>
      <LocalClientComponent />
      <LibraryClientComponent />
    </main>
  )
}
