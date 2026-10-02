import {Suspense} from 'react';
import App from '@/components/learning/App';
export default function Page(){return <Suspense fallback={<p>Loading course…</p>}><App page="details"/></Suspense>}
