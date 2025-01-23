interface Props {
    children: React.ReactNode;
}

export const App = (props: Props) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">{props.children}</div>
                <script type="module" src="/public/client.js"></script>
            </body>
        </html>
    )
}
