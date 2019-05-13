export class NotificationBar extends React.Component {
    state = {
        notifications: [],
    }

    render() {
        return (
            <section
                role="alert"
                style={{ position: 'fixed', padding: '1rem 2rem', display: 'flex', flexFlow: 'row nowrap', width: '100%', boxSizing: 'border-box' }}
            >
                <h3 style={{ flexBasis: '6rem' }}>Success!</h3>
                <p>Vin was copied!</p>
            </section>
        );
    }
}