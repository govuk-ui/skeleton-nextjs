import { Button, InsetText, SummaryList, SummaryListItem, SummaryListKey, SummaryListValue, Typography } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { useTranslation } from 'next-i18next';

// To use SSR (Server Side Rendering) you must export a function called getServerSideProps from a page.
// Read more: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps = async (context) => await getPageData(context);

export default function Index({}) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{ `${ t('home:pageTitle') } - ${ t('common:govuk') }` }</title>
      </Head>

      <Typography variant="l" component="h1">
        GOVUK-UI example project
      </Typography>
      
      <Typography>Use this project as a starting point to build your own GOVUK service</Typography>

      <InsetText>
        This particular project is built with <b>React</b> and <b>Next</b>, making use of Server Side Rendering to allow the service to be built with full accesibility, and to work without any clioent side JavaScript (although some client side JavaScript is used to augment controls if available)
        <br/><br/>
        This project uses the <b>pages</b> direcdtory and not the <b>app</b> directory in Next.
        <br/><br/>
        GOVUK-UI is designed to be a framework agnostic component library for React. Using Next is one of many ways to make use of this library, you are free to use any framework you like
      </InsetText>

      <Typography variant='m'>
        Example journey
      </Typography>

      <Typography>
        This simple journey consists of the following pages.
      </Typography>

      <SummaryList>
        <SummaryListItem>
          <SummaryListKey>Full name page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses multiple <b>TextInput</b> components to capture a users full name</Typography>
            <Typography>One field uses the <b>HintText</b> component and is optional</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Date of birth page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>DateInput</b> component to capture the users date of birth</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Where do you live page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>Radios</b> component to display options to the user</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Where do you live other page</SummaryListKey>
          <SummaryListValue>
            <Typography>This page will only appear in the journey if the user selects the answer &apos;other&apos; from the &apos;where do you live&apos; page</Typography>
            <Typography>Uses a <b>TextInput</b> component</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Contact preferences page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>Checkboxes</b> component</Typography>
            <Typography>One option has a conditional reveal to unfold an additional <b>TextInput</b> component</Typography>
            <Typography>One option has exclusive behaviour, to deselect all other options when selected</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Check your answers page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>SummaryList</b> component to show the users answers before submission</Typography>
            <Typography>Each answer has a <b>Change</b> link to allow the user to change an answer and quickly jump back to the check your ansers page</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Application submitted page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>Panel</b> component to show the users that the application is complete and provides them with a reference number</Typography>
            <Typography>Each answer has a <b>Change</b> link to allow the user to change an answer and quickly jump back to the check your ansers page</Typography>
          </SummaryListValue>
        </SummaryListItem>
      </SummaryList>

      <Typography>
        Click here to start the example journey
      </Typography>
      <Button isStartButton href='/example/full-name'>
        Start
      </Button>

      <Typography variant='m'>
        Journey routing
      </Typography>
      <Typography>
        You will need to write your own methods for routing from one page to another. 
        In this example, each page posts to the same method (form-handler.js) in Next&apos;s api directory. 
        This saves the users answers either to a file or to redis and then uses a json configuration file based system to work out where to send the user next. 
        In the directory &apos;page-configurations&apos; there is a one file per page.  These configurations contain information for validation and routing and the form-handler uses them for routing. 
        Feel free to copy this method of routing, or to write your own.  The routing is beyond the scope of the GOVUK-UI component library.
      </Typography>

      <Typography variant='m'>
        Validation
      </Typography>
      <Typography>
        You will need to write your own methods for validating forms based on a users answers.
        Validation is done from the validation folder in this example project.  The validation is triggered on form post 
        as part of the form-handler.js and file based configuration mentioned in the Journey routing section above.
        Feel free to copy this method of validation, or write your own.  Validation is beyond the scope of the GOVUK-UI component library, 
        but the controls are in place to support it.
      </Typography>

      <Typography variant='m'>
        Creating a new page
      </Typography>
      <Typography>
        To add a new page to this example project.
        <ul className='govuk-list govuk-list--number'>
          <li>Create a jsx view in the /example folder named appropriately for hte question you want to ask</li>
          <li>Extend the urls constant in the /lib/urls.js file, you will want this to match your views filename</li>
          <li>Change the configuration file for the page that will appear before you new page in the journey to point it to your new page</li>
          <li>Create a configuration file in the page-configurations folder and name it the same as your view, and url</li>
          <li>Write the configuration file to add validation and to tell the router which page will come after your new page</li>
        </ul>
      </Typography>
    </>
  )
}
