$(document).ready(function() {
    // Inicializa o calendário
    $('#evoCalendar').evoCalendar({
    theme: 'Default',
    format: 'mm/dd/yyyy',
    titleFormat: 'MM yyyy',
    eventHeaderFormat: 'MM d, yyyy',
    firstDayOfWeek: 0,
    language: 'pt',
    todayHighlight: true,
    sidebarDisplayDefault: false,
    sidebarToggler: true,
    eventListToggler: true
    });

    // Adiciona evento com os dados do serviço
    $('#evoCalendar').evoCalendar('addCalendarEvent', [
    {
        id: 'evento-servico-1',
        name: 'Atendimento NailSpot',
        date: '11/18/2025',
        type: 'appointment',
        description: `
        <div class="caixa-servico">
            <h3>Atendimento NailSpot</h3>
            <p><strong>Local:</strong> NailSpot Studio - Unidade Centro</p>
            <p><strong>Horário:</strong> 14:30</p>
            <p><strong>Serviço:</strong> Manicure</p>
            <p><strong>Profissional:</strong> Ana Souza</p>
            <div class="botoes-servico">
            <button class="btn-remarcar">Remarcar</button>
            <button class="btn-cancelar">Cancelar</button>
            </div>
        </div>
        `
    }
    ]);

    // Abrir o modal ao clicar em "Remarcar"
    $(document).on('click', '.btn-remarcar', function() {
    $('#modalRemarcar').fadeIn();
    });

    // Fechar o modal
    $('.fechar, #cancelarModal').on('click', function() {
    $('#modalRemarcar').fadeOut();
    });

    // Confirmar remarcação
    $('#confirmarRemarcacao').on('click', function() {
    const novaData = $('#novaData').val();
    const novoHorario = $('#novoHorario').val();

    if (!novaData || !novoHorario) {
        alert('Por favor, selecione uma nova data e horário.');
        return;
    }

    alert(`Agendamento remarcado para ${novaData} às ${novoHorario}.`);
    $('#modalRemarcar').fadeOut();
    });

    // Cancelar agendamento
    $(document).on('click', '.btn-cancelar', function() {
    if (confirm('Tem certeza que deseja cancelar este agendamento?')) {
        alert('Agendamento cancelado.');
    }
    });
});