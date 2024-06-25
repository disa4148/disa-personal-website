import { useLocale } from 'next-intl';
import { Button } from '../shared/ui/button';

const NotFound: React.FC = () => {
  const locale: string = useLocale();
  return (
    <html lang={locale}>
      <head>
        <title>404. Page not found</title>
      </head>
      <body className="text-[#ffffff]">
        <div className="w-screen flex flex-col justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-48 font-black">404</h1>
            <p>Page not found</p>
          </div>
          <Button variant="default">Go back</Button>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
